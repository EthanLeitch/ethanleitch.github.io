---
layout: ../layouts/BlogLayout.astro
title: 52 Pickup
description: Rules v0.0
---

**Setup**

- All cards are randomly spread face-down, with no one card being directly on top of another.
- The first card flipped over acts like an Ace, but triggers no cards.

**Aim of the Game**

- Get the most amount of cards matching your suit.
- The game ends when one card is remaining.

**A Turn**

- On your turn, you may do one of three things: flip a card, draw a face-up card, or play a card face-down.
- Touching pairs can be picked up at the same time.

## Power Cards

- Power cards do different things when flipped up or down.
- Power cards affect cards that are touching them.

### Ace

- When flipped up, flips face-down cards.
- When flipped down, flips face-up cards.
- NOTE: Aces are not classified as number or face cards.

### King

- When flipped up, draw cards of your suit.
- When flipped down, opponent discards cards held in hand of matching ranks.

### Queen

- When flipped up, discard number cards.
- When flipped down, discard face cards.

### Jack

- When flipped up, transmutes the suit of cards.
- When flipped down, add _copies_ of face cards to your hand.
- _Copies_ are not scored, and are discarded after their effect ends.

### Joker

- When flipped up: Swaps flip up and flip down effects _of all cards_.
- NOTE: Jokers are classified as _copies_, and are discarded after their effect triggers.

## Notes on Execution Order

_The order that the player decides to flip cards is important._

- The effects of face cards must be resolved as soon as they are flipped.
- Special cards cannot affect cards that triggered them.
- Aces, when flipped by an Ace, must wait for the effects of the first Ace to resolve.
- Aces can be "interrupted" by other Aces. For example, if an Ace flips an Ace and then a King, the second Ace is interrupted and picked up.
- Cards can only be flipped once by Aces per turn.
