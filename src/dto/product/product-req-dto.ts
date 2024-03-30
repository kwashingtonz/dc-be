export class ProductReqDto {

    private searchText: string;
    private gender: number;
    private type: number;
    private sortType: number;

    public fillViaRequest(obj: any){
        this.searchText = obj.searchText;
        this.gender = parseInt(obj.gender);
        this.type = parseInt(obj.type);
        this.sortType = parseInt(obj.sortType);
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

    public getSortType(): number {
        return this.sortType;
    }

    public setSortType(sortType: number): void {
        this.sortType = sortType;
    }

  }
  