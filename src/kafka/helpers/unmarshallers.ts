import { utils } from 'ethers'

import { abi, args, chain, envelope, error, ethereum } from '../../stubs'
import { IResponseValue } from '../../types'
import { IReceipt } from '../../types/IReceipt'
import { ITransactionContext } from '../../types/ITransactionContext'
import { ProtocolType } from '../../types/ProtocolType'

export function unmarshalEnvelope(data: Buffer): IResponseValue {
  const envelopeMessage = envelope.Envelope.decode(data)
  return mapEnvelopeToResponse(envelopeMessage)
}

function mapEnvelopeToResponse(envelopeMessage: envelope.IEnvelope): IResponseValue {
  return {
    id: envelopeMessage.metadata!.id!,
    chainId: parseChain(envelopeMessage.chain),
    from: parseRawString(envelopeMessage.from),
    protocol: parseProtocol(envelopeMessage.protocol),
    txContext: parseTxContext(envelopeMessage),
    receipt: parseReceipt(envelopeMessage.receipt),
    errors: parseErrors(envelopeMessage.errors),
    extraData: parseMetadata(envelopeMessage.metadata)
  }
}

function parseChain(value?: chain.IChain | null) {
  return value && value.id ? utils.toUtf8String(value.id) : undefined
}

function parseProtocol(value?: chain.IProtocol | null) {
  if (value && value.type) {
    switch (value.type) {
      case chain.ProtocolType.BESU_ORION:
        return ProtocolType.BesuOrion
      case chain.ProtocolType.QUORUM_CONSTELLATION:
        return ProtocolType.QuorumConstellation
      case chain.ProtocolType.QUORUM_TESSERA:
        return ProtocolType.QuorumTessera
      default:
        return ProtocolType.EthereumConstantinople
    }
  }
}

function parseTxContext(envelopeMessage: envelope.IEnvelope) {
  const { args: argsV, tx } = envelopeMessage

  // A transaction context exists if we have a contractName
  if (argsV && argsV.call && argsV.call.contract && argsV.call.contract.id && argsV.call.contract.id.name) {
    const txParsed = parseTx(tx)
    const privateParsed = parsePrivate(argsV.private)

    const txContext: ITransactionContext = {
      contractName: argsV.call.contract.id.name,
      contractTag: argsV.call.contract.id.tag || undefined,
      methodSignature: parseMethod(argsV.call.method),
      input: parseRawString(argsV.data),
      args: argsV.call.args ? argsV.call.args : undefined,
      value: txParsed.value,
      gas: txParsed.gas,
      gasPrice: txParsed.gasPrice,
      nonce: txParsed.nonce,
      privateFrom: privateParsed.privateFrom,
      privateFor: privateParsed.privateFor
    }

    return txContext
  }
}

function parseReceipt(receipt?: ethereum.IReceipt | null): IReceipt | undefined {
  if (receipt) {
    return {
      blockHash: parseRawString(receipt.blockHash),
      blockNumber: parseNumber(receipt.blockNumber),
      txIndex: receipt.txIndex ? Number(receipt.txIndex) : undefined,
      txHash: parseRawString(receipt.txHash),
      status: receipt.status ? Boolean(receipt.status) : undefined,
      contractAddress: parseRawString(receipt.contractAddress),
      gasUsed: receipt.gasUsed ? Number(receipt.gasUsed) : undefined,
      cumulativeGasUsed: receipt.cumulativeGasUsed ? Number(receipt.cumulativeGasUsed) : undefined,
      postState: parseBuffer(receipt.postState),
      bloom: parseBuffer(receipt.bloom),
      logs: parseLogs(receipt.logs)
    }
  }
}

function parseErrors(errors?: error.IError[] | null) {
  if (errors && errors.length !== 0) {
    return errors.map(err => ({
      code: err.code ? Number(err.code) : undefined,
      message: err.message ? err.message : undefined,
      component: err.component ? err.component : undefined
    }))
  }
}

function parseLogs(logs?: ethereum.ILog[] | null) {
  if (logs && logs.length !== 0) {
    return logs.map(log => ({
      address: parseRawString(log.address),
      topics: parseRawStringArray(log.topics),
      data: parseBuffer(log.data),
      event: log.event ? log.event : undefined,
      decodedData: log.decodedData ? log.decodedData : undefined,
      blockNumber: parseNumber(log.blockNumber),
      txHash: parseRawString(log.txHash),
      txIndex: parseNumber(log.txIndex),
      blockHash: parseRawString(log.blockHash),
      index: parseNumber(log.index),
      removed: Boolean(log.removed)
    }))
  }
}

function parseMetadata(metadata?: envelope.IMetadata | null) {
  return metadata && metadata.extra ? metadata.extra : undefined
}

function parseMethod(method?: abi.IMethod | null) {
  return method && method.signature ? method.signature : undefined
}

function parseRawString(data: any) {
  return data && data.raw ? utils.toUtf8String(data.raw) : undefined
}

function parseRawStringArray(data?: any[] | null) {
  if (data && data.length !== 0) {
    return data.map(el => utils.toUtf8String(el.raw))
  }
}

function parseTx(tx?: ethereum.ITransaction | null) {
  if (tx && tx.txData) {
    const value = tx.txData.value ? parseQuantity(tx.txData.value) : undefined
    const gas = tx.txData.gas ? Number(tx.txData.gas) : undefined
    const gasPrice = tx.txData.gasPrice ? parseQuantity(tx.txData.gasPrice) : undefined
    const nonce = tx.txData.nonce ? Number(tx.txData.nonce) : undefined

    return {
      value,
      gas,
      gasPrice,
      nonce
    }
  }

  return {}
}

function parsePrivate(priv?: args.IPrivate | null) {
  if (priv) {
    const privateFrom = priv.privateFrom ? priv.privateFrom : undefined
    const privateFor = priv.privateFor && priv.privateFor.length !== 0 ? priv.privateFor : undefined

    return {
      privateFrom,
      privateFor
    }
  }

  return {}
}

function parseBuffer(buffer?: Uint8Array | null) {
  return buffer ? utils.toUtf8String(buffer) : undefined
}

function parseNumber(value?: number | Long | null) {
  return value ? Number(value) : undefined
}

function parseQuantity(quantity?: ethereum.IQuantity | null) {
  return quantity && quantity.raw ? utils.toUtf8String(quantity.raw) : undefined
}