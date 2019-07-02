
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();

    private appareils = [];
    constructor(private httpClient: HttpClient) { }

    emitAppareilSubject() {
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
        for (let appareil of this.appareils) {
            appareil.status = 'allume';
        }
        this.emitAppareilSubject();
    }

    switchOffAll(): void {
        for (let appareil of this.appareils) {
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
        appareilobject.id = this.appareils[(this.appareils.length - 1)].id + 1;
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

    saveAppareilToServer() {
        this.httpClient.put('https://angulare-project.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                () => {
                    console.log('appareil saved');
                    this.emitAppareilSubject();
                }, (error) => {
                    console.log('error de sauvegarde');
                }
            )
            
    }

    getAppareilFromServer() {
        this.httpClient.get<any[]>('https://angulare-project.firebaseio.com/appareils.json').subscribe(
            (appareils) => { 
                this.appareils = appareils;
                console.log('chargée')
                this.emitAppareilSubject();
             },
            (error) => {
                console.log('error', error)
            }
        );
        
    }
}