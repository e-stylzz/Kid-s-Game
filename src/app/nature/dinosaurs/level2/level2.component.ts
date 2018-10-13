import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  dinosaurs = [
    {
      'question': '____ is the largest dinosaur?',
      'answer': 'Argentinosaurus',
      'bank': ['Tyranosaurus Rex', 'Stegosaurus', 'Triceratops', 'Argentinosaurus'],
      'type': 'Dinosaur',
      'level': 2
    },
    {
        'question': '______ is a carnovore?',
        'answer': 'Tyranosaurus Rex',
        'bank': ['Apatosaurus', 'Brachiosaurus', 'Diplodocus', 'Tyranosaurus Rex'],
        'type': 'Dinosaur',
        'level': 2
    },
    {
      'question': '______ is the tallest dinosaur?',
      'answer': 'Brachiosaurus',
      'bank': ['Apatosaurus', 'Diplodocus', 'Tyranosaurus Rex', 'Brachiosaurus'],
      'type': 'Dinosaur',
      'level': 2
    },
    {
      'question': 'Which dinosaur flies?',
      'answer': 'Pterodactyl',
      'bank': ['Pterodactyl', 'Ouranosaurus', 'Spinosaurus', 'Baryonyx'],
      'type': 'Dinosaur',
      'level': 2
    },
    {
      'question': 'Which dinosaur swims?',
      'answer': 'Plesiosaurus',
      'bank': ['Pterodactyl', 'Nurosaurus', 'Stegosaurus', 'Plesiosaurus'],
      'type': 'Dinosaur',
      'level': 2
    }
  ];
  test: object;
  answer: string;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.test = this.dinosaurs[Math.floor(Math.random() * this.dinosaurs.length)];
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
    if (answer === this.test.answer) {
      this.correct = true;
      console.log('Correct');
    } else {
      this.correct = false;
      console.log('Wrong');
    }
  }

}
