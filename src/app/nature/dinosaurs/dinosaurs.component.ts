import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {

  dinosaurs = [
    'Allosaurus', 'Ankylosaurus', 'Apatosaurus', 'Argentinosaurus', 'Dimetrodon', 'Diplodocus',
    'Iguanodon', 'Kentrosaurus', 'Parasaurolophus', 'Spinosaurus', 'Stegosaurus', 'Triceratops',
    'Tyranosaurus Rex', 'Utahraptor', 'Velociraptor', 'Mosasaurus', 'Plesiosaurus', 'Pachycephalosaurus',
    'Paralititan', 'Nurosaurus', 'Brachiosaurus', 'Shunosaurus', 'Edmontosaurus', 'Therizinosaurus',
    'Amargasaurus', 'Tsintaosaurus', 'Maiasaura', 'Plateosaurus', 'Corythosaurus', 'Carnotaurus',
    'Ouranosaurus', 'Styracosaurus', 'Protoceratops', 'Herrerasaurus', 'Pentaceratops', 'Struthiomimus',
    'Archaeopteryx', 'Baryonyx'
  ];
  answer: string;
  answer_pool = [];
  showAnswer: boolean;
  correct: boolean;

  constructor() { }

  ngOnInit() {
    this.showAnswer = false;
    this.answer = this.dinosaurs[Math.floor(Math.random() * this.dinosaurs.length)];

    const answer2 = this.dinosaurs[Math.floor(Math.random() * this.dinosaurs.length)];
    const answer3 = this.dinosaurs[Math.floor(Math.random() * this.dinosaurs.length)];
    const answer4 = this.dinosaurs[Math.floor(Math.random() * this.dinosaurs.length)];

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
