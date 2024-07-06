import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private emojis: string[] = [
    '🧙‍♂️', // Wizard
    '🧝‍♂️', // Elf
    '🐉', // Dragon
    '⚔️', // Crossed Swords
    '🪄', // Magic Wand
    '🧟‍♂️', // Zombie
    '🦄', // Unicorn
    '🏰', // Castle
    '👹', // Ogre
    '🧞‍♂️', // Genie
    '🧛‍♂️', // Vampire
    '🧜‍♂️', // Merman
    '🦸‍♂️', // Superhero
    '🦹‍♂️', // Supervillain
    '🧚‍♂️', // Fairy
    '🌌', // Milky Way
    '💫', // Dizzy
    '✨', // Sparkles
    '🔥', // Fire
    '⚡', // High Voltage
    '❄️', // Snowflake
    '☄️', // Comet
    '🌪️', // Tornado
    '🌈', // Rainbow
    '🪐', // Ringed Planet
    '🧩', // Puzzle Piece
    '🎲', // Game Die
    '🧺', // Basket
    '🏹', // Bow and Arrow
    '🎨', // Artist Palette
  ];

  private remainingEmojis: string[] = [...this.emojis];

  getRandomImage(): string {
    if (this.remainingEmojis.length === 0) {
      this.resetEmojis();
    }
    const randomIndex = Math.floor(Math.random() * this.remainingEmojis.length);
    const selectedEmoji = this.remainingEmojis.splice(randomIndex, 1)[0];
    return selectedEmoji;
  }

  resetEmojis() {
    this.remainingEmojis = [...this.emojis];
  }
}
