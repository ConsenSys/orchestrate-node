import { utils } from 'ethers'

import { abi, args, chain, envelope, ethereum } from '../../stubs'
import { ICall } from '../../types/ICall'
import { IExtraData } from '../../types/IExtraData'
import { ITransaction } from '../../types/ITransaction'
import { ProtocolType } from '../../types/ProtocolType'
import { MAINNET_CHAIN_ID } from '../constants'

import { formatMethodArgs } from './solidity-formatters'

export function formatMetadata(id?: string, extra?: IExtraData, authToken?: string) {
  if (authToken) {
    extra = { Bearer: authToken, ...extra }
  }
  return envelope.Metadata.create({ id, extra })
}

export function formatEnvelopeArgs(call: ICall, data?: string, privateFrom?: string, privateFor?: string[]) {
  return envelope.Args.create({
    call: formatCall(call),
    private: formatPrivate(privateFrom, privateFor),
    data: formatData(data)
  })
}

export function formatCall(call: ICall) {
  return args.Call.create({
    contract: formatContract(call.contractName, call.contractTag),
    method: formatMethod(call.methodSignature),
    args: formatMethodArgs(call.methodSignature, call.args)
  })
}

export function formatContract(name?: string, tag?: string) {
  return abi.Contract.create({ id: formatContractId(name, tag) })
}

function formatContractId(name?: string, tag?: string) {
  return abi.ContractId.create({ name, tag })
}

export function formatMethod(signature?: string) {
  return abi.Method.create({ signature })
}

export function formatPrivate(privateFrom?: string, privateFor?: string[]) {
  return args.Private.create({ privateFrom, privateFor })
}

export function formatProtocol(type?: ProtocolType) {
  let protocolType: chain.ProtocolType = chain.ProtocolType.ETHEREUM_CONSTANTINOPLE

  switch (type) {
    case ProtocolType.BesuOrion:
      protocolType = chain.ProtocolType.BESU_ORION
      break
    case ProtocolType.QuorumConstellation:
      protocolType = chain.ProtocolType.QUORUM_CONSTELLATION
      break
    case ProtocolType.QuorumTessera:
      protocolType = chain.ProtocolType.QUORUM_TESSERA
      break
    default:
      protocolType = chain.ProtocolType.ETHEREUM_CONSTANTINOPLE
      break
  }

  return chain.Protocol.create({ type: protocolType })
}

export function formatAccount(address?: string) {
  if (!address) {
    return
  }

  const formattedAddress = utils.getAddress(address)
  return ethereum.Account.create({ raw: utils.arrayify(formattedAddress) })
}

export function formatChain(chainId?: string) {
  const id = chainId ? chainId : MAINNET_CHAIN_ID
  return chain.Chain.create({ id: Buffer.from(id) })
}

export function formatTransaction(tx: ITransaction) {
  return ethereum.Transaction.create({ txData: formatTxData(tx), raw: formatData(tx.raw) })
}

export function formatTxData(tx: ITransaction) {
  return ethereum.TxData.create({
    data: formatData(tx.data),
    gas: tx.gas,
    gasPrice: formatQuantity(tx.gasPrice),
    nonce: tx.nonce,
    to: formatAccount(tx.to),
    value: formatQuantity(tx.value)
  })
}

export function formatData(data?: string) {
  return data ? ethereum.Data.create({ raw: utils.arrayify(data) }) : undefined
}

export function formatQuantity(data?: string) {
  return data ? ethereum.Quantity.create({ raw: Buffer.from(data) }) : undefined
}
