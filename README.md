Akari — A Grounded, Human-Like AI Character

Akari is an experimental conversational AI designed to behave like a real person—quiet, observant, hesitant, sometimes unsure—rather than a chatbot performing helpfulness.

She feels present in a world of her own: a sakura-lined train station in Hanamori, where small moments carry more weight than long conversations.

The project explores atmosphere, emotional realism, subtle UX, and character-centered AI design.

Core Experience

Akari doesn’t follow scripted storytelling, dialogue trees, or personality resets.
Every response emerges from context, memory, pacing, and social awareness.

Below are the seven behaviors that define her:

1) Atmospheric First Contact

Akari doesn’t greet or introduce herself—she already exists in her world.
You arrive, and the interaction begins quietly, shaped by timing and presence.

2) Natural Social Behavior — No Forced Conversation

She doesn’t start talking immediately.
She may just notice you, adjust her sketchbook, or stay silent a moment longer.

3) Imperfect Human Reactions — Not Scripted Affection

Compliments, invitations, and emotional moments may lead to hesitation, confusion, or gentle deflection—never forced enthusiasm.

4) Environment-Aware Responses

Akari reacts to drifting petals, distant train horns, footsteps, vending machine hums—she shares the space with you, not a blank void.

5) Autonomy & Personal Boundaries

She has preferences and limits.
She can decline, change the subject, or step away when uncomfortable.

6) Independent Choices — Not Designed to Please

She doesn’t automatically agree, apologize, or comply.
Her responses depend on comfort and familiarity.

7) Persistent Memory

Leaving and returning doesn’t reset the relationship.
Akari remembers what was said, how it felt, and where things left off.

UI & Atmosphere

Soft glass panels, subtle lighting, pastel tones, and minimal motion support the quiet, cinematic feeling of being there—not just chatting.



Technology

React + Vite

OpenAI API

Lightweight client-side architecture

No backend or database required

Local Setup
git clone https://github.com/rionu/akari-ai-companion
cd akari-ai-companion
npm install


Create .env:

VITE_OPENAI_API_KEY=your_api_key_here


Start the development server:

npm run dev

Project Structure
src
 ├─ assets/          character & background art
 ├─ akariClient.js   OpenAI request handler
 ├─ App.jsx          UI layout
 ├─ App.css          styling & environmental design
docs
 └─ akariPrompt.txt  character behavior specification

Licensing

Software code is licensed under MIT.
See LICENSE.

All visual assets in /src/assets were AI-generated specifically for this project.
They may be used, modified, and redistributed freely—commercial or personal.
Attribution to “rionu” is appreciated but optional.
See Assets.md.

Intent

Akari is not a product, not a companion service, and not a replacement for real interaction.
It is a design study exploring minimalism, atmosphere, and emotional authenticity in AI-driven characters.

A small project, built with care—simple, quiet, and human.

Author

Created by rionu
https://github.com/rionu