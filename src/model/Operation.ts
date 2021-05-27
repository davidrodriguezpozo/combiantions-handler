import IOperation from "@/api/IOperation";

export default class Operation {

    private m_data : IOperation[];

    public constructor(data: IOperation[]){
        this.m_data = data;
    }

    public getOperations(): IOperation[] {
        return this.m_data;
    }

    public combine(op: Operation): Operation {
        const ownOperations = this.m_data;
        const otherOperations = op.getOperations();
        const combined = [...ownOperations, ...otherOperations];
        return new Operation(combined);
    }

    public static combine(op1: Operation, op2: Operation): Operation {
        return op1.combine(op2);
    }

    public apply(str: string): string {
        const arrayFromString = str.split('');
        let cursor = 0;
        this.m_data.forEach( (value => {
            if(value.insert){
                arrayFromString.splice(cursor, 0, value.insert);
            } else if (value.delete) {
                arrayFromString.splice(cursor, value.delete, '');
            } else if (value.move) {
                cursor += value.move;
            }
        }));
        return arrayFromString.join('');
    }

}