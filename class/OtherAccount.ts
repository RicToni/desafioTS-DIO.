import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }
      deposit = (amount: number): void => {
        this.balance += amount + 10;
        console.log(`Sua conta recebeu um depósito de ${amount + 10} reais`)
      }
   
    }
