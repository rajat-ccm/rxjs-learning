export interface Data {
    groups: Group[]
}

export interface Group {
    type: string
    label: string
    value: string
    operators: Operator[]
}

export interface Operator {
    label: string
    value: string
    parent?: string
}