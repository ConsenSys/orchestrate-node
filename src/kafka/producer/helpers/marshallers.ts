import { Message } from 'kafkajs'

import { envelope } from '../../../stubs'
import { ITransactionRequest } from '../../../types'
import { IRequest } from '../../../types/IRequest'

import * as formatters from './stub-formatters'

export function marshalTransactionRequest(request: ITransactionRequest): Message {
  const envelopeMessage: envelope.IEnvelope = {
    metadata: formatters.formatMetadata(request.id!, request.extraData, request.authToken),
    args: formatters.formatEnvelopeArgs(
      {
        contractName: request.contractName,
        contractTag: request.contractTag,
        methodSignature: request.methodSignature,
        args: request.args
      },
      request.privateFrom,
      request.privateFor
    ),
    protocol: formatters.formatProtocol(request.protocol),
    from: formatters.formatAccount(request.from),
    chain: formatters.formatChain(request.chainId),
    tx: formatters.formatTransaction(request)
  }

  return {
    key: `${request.chainId}-${request.from}`,
    value: marshalEnvelope(envelopeMessage)
  }
}

export function marshalRequest(request: IRequest): Message {
  const envelopeMessage: envelope.IEnvelope = {
    metadata: formatters.formatMetadata(request.id, request.extraData, request.authToken)
  }

  return { value: marshalEnvelope(envelopeMessage) }
}

function marshalEnvelope(envelopeMessage: envelope.IEnvelope) {
  const { encode } = envelope.Envelope

  // The type is Buffer on Node
  return encode(envelopeMessage).finish() as Buffer
}