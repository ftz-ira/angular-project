
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 0,
            name: 'Machine à laver',
            status: 'eteint'
        },
        {
            id: 1,
            name: 'Frigo',
            status: 'allume'
        },
        {
            id: 2,
            name: 'Ordinateur',
            status: 'eteint'
        }
    ];
    constructor() { }

    emitAppareilSubject(){
        this.appareilsSubject.next(this.appareils.slice());
    }

    switchOn(i: number) {
        
        this.appareils[i].status = 'allume';
        this.emitAppareilSubject();
    }

    switchOff(i: number) {
        
        this.appareils[i].status = 'eteint';
        this.emitAppareilSubject();
    }

    switchOnAll(): void {
        for( let appareil of this.appareils) {
            appareil.status = 'allume';
        }
        this.emitAppareilSubject();
    }

    switchOffAll(): void {
        for( let appareil of this.appareils) {
            appareil.status = 'eteint';
        }
        this.emitAppareilSubject();
    }

    addAppareil(name: string, status: string) {
        const appareilobject = {
            id: 0,
            name: '',
            status: ''
        }
        appareilobject.id = this.appareils[(this.appareils.length -1)].id + 1;
        appareilobject.name = name;
        appareilobject.status = status;

        this.appareils.push(appareilobject);
        this.emitAppareilSubject();
    }
    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id
            }
        );
        return appareil;
    }
}