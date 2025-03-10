import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { SkillExchangeAccepted } from "../generated/schema"
import { SkillExchangeAccepted as SkillExchangeAcceptedEvent } from "../generated/SkillSwap/SkillSwap"
import { handleSkillExchangeAccepted } from "../src/skill-swap"
import { createSkillExchangeAcceptedEvent } from "./skill-swap-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let offerer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newSkillExchangeAcceptedEvent = createSkillExchangeAcceptedEvent(
      id,
      offerer
    )
    handleSkillExchangeAccepted(newSkillExchangeAcceptedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SkillExchangeAccepted created and stored", () => {
    assert.entityCount("SkillExchangeAccepted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SkillExchangeAccepted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "offerer",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
