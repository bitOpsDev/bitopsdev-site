---
title: "Snowball"
description: "A free multiplayer io-style game where you roll a snowball around a winter world, grow by rolling over the ground, and try to be the last ball standing. In development, with AI helping as an experiment."
pubDate: 2026-10-28
featured: false
status: "In Development"
heroImage: "/images/games/snowball-hero.jpg"
tags: ["Unity", "Multiplayer", "io Game", "AI-Assisted"]
---

**Snowball** is a free multiplayer io-style game I'm building in Unity. You roll a snowball around a winter world, and it grows as you roll. Think Slither.io or Hole.io, but you're a snowball.

### The idea

- **Grow by rolling.** Your size and score come from actually rolling over the ground, so the more you move, the bigger you get.
- **Bigger beats smaller.** Bigger balls are slower, but they can steal size from smaller ones on contact. If a ball gets big enough compared to another, it eats it and that player is out.
- **Last ball standing wins.** Matches are round-based, and a shrinking melt zone keeps pushing everyone closer together.
- **A new world every game.** The terrain is generated for each match, with different areas like city streets, mountains, ponds, and open snow fields, and everyone in the match plays the same map.

The goal is a game that's quick to jump into and free to play. The first target is playing right in your browser, with mobile after that.

### Where it is right now

Snowball is still early and isn't playable by the public yet. The core loop is coming together, but a lot of the art is still placeholder, and I still have performance and load-time work ahead of me. I'm not promising a release date yet.

It's built with **Unity 6 (URP)** and **Photon Fusion 2** for multiplayer.

### Screenshots

These are work-in-progress shots from the current build, so expect placeholder props and rough edges.

![Snowball early in a round, a small snowball rolling through pine trees with the minimap and scoreboard](/images/games/snowball-1.jpg)

![A growing snowball rolling past buildings and props in the town](/images/games/snowball-2.jpg)

![A larger snowball rolling around the town fountain while the score climbs](/images/games/snowball-3.jpg)

![A big snowball in the middle of the town square with houses, trees, and a fountain around it](/images/games/snowball-4.jpg)

![Another view of the snowball near the fountain, with buildings and a snowy ridge in the background](/images/games/snowball-5.jpg)

### Watch Development

Here's where the project started, and a look at how AI helped with the placeholder models:

<div class="youtube-embed">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iVdmObATbN8"
        title="I'm Using AI to Build a Snowball .io Game"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
    ></iframe>
</div>

<div class="youtube-embed">
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wqbkuSRf-5w"
        title="One AI Prompt Made All My Game's Low-Poly Models in Blender"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
    ></iframe>
</div>

### Built with AI, as an experiment

Snowball is also an experiment in how far AI can help one person build a video game.

I'm a solo developer, and I've always hit walls in game development, places where I just didn't have the skills to get past a problem. AI is helping me fill those gaps. I use AI assistants for a lot of the Unity code, for architecture and code review, and for Blender modeling help. For example, I had an AI agent write a Python script for Blender that generated first-pass low-poly models for my placeholder objects, and then I made small edits on top of what it produced.

I know some people have strong feelings about AI in art, video, and games, and I'm not here to tell anyone what to think or do with it. I'm just sharing what it's actually like to use it on a real project: what works, what doesn't, and what I still have to do myself.

### Follow along

I'm sharing the build as I go on the [bitOps Dev YouTube channel](https://www.youtube.com/@bitOpsDev). If you're into io games, Unity, or curious how AI-assisted development really plays out, come along for the ride.
