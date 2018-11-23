import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs = [
    'Stink Bug', 'Lady Bug', 'House Fly', 'Harlequin Bug', 'Boxelder Bug', 'Scorpion', 'Jumping Spider',
    'Wolf Spider', 'Orb Weaver Spider', 'Black Widow Spider', 'Tarantula', 'Bumble Bee', 'Honey Bee', 'Sugar Bee',
    'Army Ant', 'Leaf Cutter Ant', 'Bulldog Ant', 'Hornet', 'Wasp', 'Tiger Moth', 'Blue Morpho', 'Monarch'
  ];
  answer: string;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.answer = this.bugs[Math.floor(Math.random() * this.bugs.length)];

    const answer2 = this.bugs[Math.floor(Math.random() * this.bugs.length)];
    const answer3 = this.bugs[Math.floor(Math.random() * this.bugs.length)];
    const answer4 = this.bugs[Math.floor(Math.random() * this.bugs.length)];

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
