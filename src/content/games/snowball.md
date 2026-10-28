---
title: "Snowball"
description: "A free multiplayer io-style game where you roll a snowball around a snowy town, grow by picking things up, and try to be the last ball standing. In development, with AI helping as an experiment."
pubDate: 2026-10-28
featured: false
status: "In Development"
tags: ["Unity", "Multiplayer", "io Game", "AI-Assisted"]
---

**Snowball** is a multiplayer io-style game I'm building in Unity. You roll a snowball around a snowy town, and it grows as you pick things up. Think Slither.io or Hole.io, but you're a snowball.

### The idea

- **Grow by rolling over things.** Cars, trees, lamp posts, mailboxes, buses, even a clock tower. You can only pick up something once you're bigger than it, so the town slowly opens up as you grow.
- **Bigger eats smaller.** If your ball runs into a smaller player, you absorb it and take its size.
- **Rounds with a melting zone.** The safe area keeps shrinking, and the last snowball standing wins.
- **A new town every round.** Each round's world is generated from a shared seed, so everyone in the match plays the same map.

The goal is a free game that's quick to jump into, with web and mobile as the first targets. A Steam release may follow later. There's no release date and no playable build yet.

### Where it is right now

Snowball is early. Multiplayer works in a basic form, but it's still rough, and there's no matchmaking yet. The art and UI are placeholders, and the models you'll see in early videos are first-pass low-poly stand-ins that I'll keep replacing as the project moves along.

It's built with **Unity 6 (URP)** and **Photon Fusion 2** for networking.

### Built with AI, as an experiment

Snowball is also an experiment in how far AI can help one person build a video game.

I'm a solo developer, and I've always hit walls in game development, places where I just didn't have the skills to get past a problem. AI is helping me fill those gaps. I write code with an AI coding agent, and I use another AI assistant to help with architecture and code review. In one recent devlog, a single prompt had an AI agent write a Python script for Blender that generated first-pass low-poly models for all of my gray-box placeholders. I then made small edits on top of what it produced.

I know some people have strong feelings about AI in art, video, and games, and I'm not here to tell anyone what to think or do with it. I'm just sharing what it's actually like to use it on a real project: what works, what doesn't, and what I still have to do myself.

### Follow along

I'm sharing the build as I go on the [bitOps Dev YouTube channel](https://www.youtube.com/@bitOpsDev). If you're into io games, Unity, or curious how AI-assisted development really plays out, come along for the ride.
