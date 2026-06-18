function union(): void {
    let a: number|string

    /**
     * 当使用联合类型时，只能调用联合类型中所有类型的公共属性
     * @param type
     */
    function print(type: number|string) {
        console.log(type.toString());
    }
}
