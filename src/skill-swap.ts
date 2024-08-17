import {
  SkillExchangeAccepted as SkillExchangeAcceptedEvent,
  SkillExchangeCompleted as SkillExchangeCompletedEvent,
  SkillExchangePosted as SkillExchangePostedEvent,
  UserRated as UserRatedEvent,
  UserRegistered as UserRegisteredEvent
} from "../generated/SkillSwap/SkillSwap"
import {
  SkillExchangeAccepted,
  SkillExchangeCompleted,
  SkillExchangePosted,
  UserRated,
  UserRegistered
} from "../generated/schema"

export function handleSkillExchangeAccepted(
  event: SkillExchangeAcceptedEvent
): void {
  let entity = new SkillExchangeAccepted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SkillSwap_id = event.params.id
  entity.offerer = event.params.offerer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSkillExchangeCompleted(
  event: SkillExchangeCompletedEvent
): void {
  let entity = new SkillExchangeCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SkillSwap_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSkillExchangePosted(
  event: SkillExchangePostedEvent
): void {
  let entity = new SkillExchangePosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SkillSwap_id = event.params.id
  entity.requester = event.params.requester
  entity.skillOffered = event.params.skillOffered
  entity.skillRequested = event.params.skillRequested

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserRated(event: UserRatedEvent): void {
  let entity = new UserRated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reputation = event.params.reputation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserRegistered(event: UserRegisteredEvent): void {
  let entity = new UserRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.userName = event.params.userName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
