import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UselessFactService {
  private apiUrl: string = 'https://uselessfacts.jsph.pl/api/v2/facts/random?';

  async getRandomFact() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
      return json;
    } catch (error: any) {
      console.error(error.message);
    }
  }
}
