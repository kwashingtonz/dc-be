export class ProductReqDto {

    private searchText: string;
    private gender: number;
    private type: number;
    private sortType: string;

    public fillViaRequest(obj: any){
        this.searchText = obj.searchText;
        this.gender = parseInt(obj.gender);
        this.type = parseInt(obj.typ);
        this.sortType = obj.sortType;
    }

    public getSearchText(): string {
        return this.searchText;
    }

    public setSearchText(searchText: string): void {
        this.searchText = searchText;
    }

    public getGender(): number {
        return this.gender;
    }

    public setGender(gender: number): void {
        this.gender = gender;
    }

    public getType(): number {
        return this.type;
    }

    public setType(type: number): void {
        this.type = type;
    }

    public getSortType(): string {
        return this.sortType;
    }

    public setSortType(sortType: string): void {
        this.sortType = sortType;
    }

  }
  