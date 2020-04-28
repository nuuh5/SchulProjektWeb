import { Observable } from 'https://unpkg.com/utiliti@0.0.6/observable.js'
import { Remarkable } from 'https://unpkg.com/remarkable@2.0.0/dist/esm/index.browser.js'
import { hello } from './hello.js'

var md = new Remarkable();



fetch('./README.md').then(response => response.text()).then((text) => {

    document.body.innerHTML += md.render(text);

})

const myObservable = new Observable('Falk');


const subscription = myObservable.subscribeReplay((name) => console.log(hello(name)))

myObservable.next('Noah').next('2').next('3')

setTimeout(() => {
    subscription.unsubscribe();
    myObservable.next("doesn't work");

}, 1);

const p = document.createElement('p');
p.innerText = 'This is a paragraph';

document.body.appendChild(p);

console.log(document.body.children);

p.onclick = () => window.alert('clicked p');

p.style = "color: rgba(0,0,0,0)";

document.body.style = "background: gray";


class Name {
    constructor(name) {

        this.name = name;
    }

    getName() {
        return this.name;
    }

}

console.log(new Name("Falk"), new Name('Noah'));
console.log(new Name('Elia'));

myObservable.next('Elia');

//window.p = p;