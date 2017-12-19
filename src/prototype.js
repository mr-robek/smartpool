
class Pool {
    
    constructor() {
        this.tokenTotal = new BigNumber("0");
        this.contibutions = {};
        this.ethTotal = new BigNumber("0");
    }
    
    contribute(person, amount) {
        amount = new BigNumber(amount);
        if (amount.lessThan(new BigNumber("0"))) {
            throw new Error(`amount cannot be negative. amount: ${amount}`);
        }
        if (!this.contibutions[person]) {
            this.contibutions[person] = new BigNumber("0");
        }
        this.contibutions[person] = this.contibutions[person].add(amount);
        this.ethTotal = this.ethTotal.add(amount);
        return this.contibutions[person];
    }
    
    withdrawContribution(person, amount) {
        amount = new BigNumber(amount);
        if (amount.lessThan(new BigNumber("0"))) {
            throw new Error(`amount cannot be negative. amount: ${amount}`);
        }
        var contribution = this.contibutions[person] ? this.contibutions[person] : new BigNumber("0");
        if (contibution.lessThen(amount)) {
            amount = contibution;
        }
        this.contibutions[person] = contribution.minus(amount);
        this.ethTotal = this.ethTotal.minus(amount);
        return this.contibutions[person];
    }
    
    balance(person) {
        var ethContribution = this.contibutions[person];
        var tokens = this.contibutions[person].dividedBy(this.ethTotal).times(this.tokenTotal);
        return [ethContribution, tokens];
    }

    depositToken(amount) {
        this.tokenTotal = new BigNumber(amount);
    }
    
}
st_pur = new BigNumber("8383.8386");
st_bon = new BigNumber("3772.727379");
st_sum = st_pur.add(st_bon);

var pool = new Pool();
pool.contribute("rob", 0.33);
pool.contribute("vlad", 2);
pool.depositToken(st_sum);
console.log(pool.balance("rob").map(a => a.toString()))
console.log(pool.balance("vlad").map(a => a.toString()))

