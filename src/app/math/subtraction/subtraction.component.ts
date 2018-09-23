import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  number1: number;
  number2: number;
  answer: number;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.number1 = this.getRandomInt(0, 10);
    this.number2 = this.getRandomInt(0, this.number1);
    this.answer = this.number1 - this.number2;

    const answer2 = this.getRandomInt(0, 10);
    const answer3 = this.getRandomInt(0, 10);
    const answer4 = this.getRandomInt(0, 10);

    this.answer_pool.push(this.answer, answer2, answer3, answer4);
    this.answer_pool = this.shuffle(this.answer_pool);

    // this area needs some work.  Create a function that loops through 3 times and pushs
    // the nubmer into the array if it isn't already there.
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  checkAnswer(answer: number) {
    console.log('Button clicked');
    this.showAnswer = true;
    this.showAnswer = true;
    if (answer === this.answer) {
      this.correct = true;
      console.log('Correct');
    } else {
      this.correct = false;
      console.log('Wrong');
    }
  }

}
