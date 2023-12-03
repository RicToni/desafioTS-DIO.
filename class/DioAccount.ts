export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      this.balance += amount;
      console.log(`Voce depositou ${amount} reais.`)
    }
  }

  withdraw = (amount: number): void => {
    if ( this.validateStatus() && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Você sacou ${amount} reais.`)
    } else {
      console.log(`Não há saldo suficiente para o saque.`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
