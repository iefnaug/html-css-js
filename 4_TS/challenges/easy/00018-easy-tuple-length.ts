/**
 * 创建一个Length泛型，这个泛型接受一个只读的元组，返回这个元组的长度。
 *
 * 例如：
 *
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
 *
 * type teslaLength = Length<tesla> // expected 4
 * type spaceXLength = Length<spaceX> // expected 5
 */

{
    type Length<T extends readonly unknown[]> = T['length']

    type tesla = ['tesla', 'model 3', 'model X', 'model Y']
    type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

    type teslaLength = Length<tesla> // expected 4
    type spaceXLength = Length<spaceX> // expected 5

    let a: teslaLength = 4
    let b: spaceXLength = 5
}

