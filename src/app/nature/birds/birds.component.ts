import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  birds = [
    'Oriole', 'Robin', 'Cardinal', 'Blue Jay', 'Gold Finch', 'Crow', 'Chickadee',
    'House Finch', 'Bald Eagle', 'Ruby Throated Hummingbird', 'Bluebird', 'Ostrich',
    'Puffin', 'Wood Thrush', 'Sparrow', 'Snowy Owl', 'Great Horned Owl', 'Barn Owl'
  ];
  answer: string;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.answer = this.birds[Math.floor(Math.random() * this.birds.length)];

    const answer2 = this.birds[Math.floor(Math.random() * this.birds.length)];
    const answer3 = this.birds[Math.floor(Math.random() * this.birds.length)];
    const answer4 = this.birds[Math.floor(Math.random() * this.birds.length)];

    this.answer_pool.push(this.answer, answer2, answer3, answer4);
    this.answer_pool = this.shuffle(this.answer_pool);
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

  checkAnswer(answer: string) {
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
