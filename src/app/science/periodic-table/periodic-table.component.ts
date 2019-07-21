import { Component, OnInit } from '@angular/core';
import { elements } from './data';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.css'],
})
export class PeriodicTableComponent implements OnInit {
  elements = elements;
  answer: object;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() {}

  ngOnInit() {
    this.showAnswer = false;
    this.answer = this.elements[Math.floor(Math.random() * this.elements.length)];

    const answer2 = this.elements[Math.floor(Math.random() * this.elements.length)].name;
    const answer3 = this.elements[Math.floor(Math.random() * this.elements.length)].name;
    const answer4 = this.elements[Math.floor(Math.random() * this.elements.length)].name;

    this.answer_pool.push(this.answer.name, answer2, answer3, answer4);
    this.answer_pool = this.shuffle(this.answer_pool);
  }

  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  checkAnswer(answer: string) {
    console.log('Button clicked');
    this.showAnswer = true;
    this.showAnswer = true;
    if (answer === this.answer.name) {
      this.correct = true;
      console.log('Correct');
    } else {
      this.correct = false;
      console.log('Wrong');
    }
  }
}
