
export class GenderDto {

    private id: number;
    private name: string;

    public fillViaObject(obj: any): void {
        this.id = obj.id;
        this.name = obj.name;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

  }
  