Hablamos de asercion de tipos cuando le aseguramos a ts que un dato sera del tipo adecuado, se utiliza => as Type<AnotherType>

Tipos de utilidad

Pick => export type NoSensitiveInfoTechnologies = Pick<Interface | Type, 'fields'>

Omit => export type NoSensitiveInfoTechnologies = Omit<Interface | Type, 'fields'>
