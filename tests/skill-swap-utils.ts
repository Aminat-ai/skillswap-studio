import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  SkillExchangeAccepted,
  SkillExchangeCompleted,
  SkillExchangePosted,
  UserRated,
  UserRegistered
} from "../generated/SkillSwap/SkillSwap"

export function createSkillExchangeAcceptedEvent(
  id: BigInt,
  offerer: Address
): SkillExchangeAccepted {
  let skillExchangeAcceptedEvent = changetype<SkillExchangeAccepted>(
    newMockEvent()
  )

  skillExchangeAcceptedEvent.parameters = new Array()

  skillExchangeAcceptedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  skillExchangeAcceptedEvent.parameters.push(
    new ethereum.EventParam("offerer", ethereum.Value.fromAddress(offerer))
  )

  return skillExchangeAcceptedEvent
}

export function createSkillExchangeCompletedEvent(
  id: BigInt
): SkillExchangeCompleted {
  let skillExchangeCompletedEvent = changetype<SkillExchangeCompleted>(
    newMockEvent()
  )

  skillExchangeCompletedEvent.parameters = new Array()

  skillExchangeCompletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return skillExchangeCompletedEvent
}

export function createSkillExchangePostedEvent(
  id: BigInt,
  requester: Address,
  skillOffered: string,
  skillRequested: string
): SkillExchangePosted {
  let skillExchangePostedEvent = changetype<SkillExchangePosted>(newMockEvent())

  skillExchangePostedEvent.parameters = new Array()

  skillExchangePostedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  skillExchangePostedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  skillExchangePostedEvent.parameters.push(
    new ethereum.EventParam(
      "skillOffered",
      ethereum.Value.fromString(skillOffered)
    )
  )
  skillExchangePostedEvent.parameters.push(
    new ethereum.EventParam(
      "skillRequested",
      ethereum.Value.fromString(skillRequested)
    )
  )

  return skillExchangePostedEvent
}

export function createUserRatedEvent(
  user: Address,
  reputation: BigInt
): UserRated {
  let userRatedEvent = changetype<UserRated>(newMockEvent())

  userRatedEvent.parameters = new Array()

  userRatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userRatedEvent.parameters.push(
    new ethereum.EventParam(
      "reputation",
      ethereum.Value.fromUnsignedBigInt(reputation)
    )
  )

  return userRatedEvent
}

export function createUserRegisteredEvent(
  userAddress: Address,
  userName: string
): UserRegistered {
  let userRegisteredEvent = changetype<UserRegistered>(newMockEvent())

  userRegisteredEvent.parameters = new Array()

  userRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  userRegisteredEvent.parameters.push(
    new ethereum.EventParam("userName", ethereum.Value.fromString(userName))
  )

  return userRegisteredEvent
}
