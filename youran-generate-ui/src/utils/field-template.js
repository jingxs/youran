import options from '@/utils/options'

/**
 * 灵活可变的字段模板
 */
export const flexibleTemplate = {
  '普通字段模板': {
    jfieldName: '',
    fieldName: '',
    fieldDesc: '',
    jfieldType: '',
    fieldType: '',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: false,
    foreignKey: false,
    specialField: '',
    fieldExample: '',
    fieldComment: '',
    dicType: '',
    query: false,
    queryType: null,
    insert: true,
    update: true,
    list: true,
    columnWidth: 0,
    listSort: false,
    show: true,
    editType: options.editTypeOptions['TEXT'].value,
    orderNo: 1
  },
  '外键模板': {
    jfieldName: '',
    fieldName: '',
    fieldDesc: '',
    jfieldType: '',
    fieldType: '',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: false,
    foreignKey: true,
    specialField: '',
    fieldExample: '',
    fieldComment: '',
    dicType: '',
    query: true,
    queryType: 1,
    insert: true,
    update: true,
    list: true,
    columnWidth: 0,
    listSort: false,
    show: true,
    editType: options.editTypeOptions['SELECT'].value,
    orderNo: 10
  }
}
/**
 * 固定字段模板
 */
export const fixedTemplate = {
  '主键ID(Long)': {
    jfieldName: 'id',
    fieldName: 'id',
    fieldDesc: '主键',
    jfieldType: 'Long',
    fieldType: 'bigint',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: '',
    fieldExample: '1',
    fieldComment: '主键ID',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: true,
    columnWidth: 100,
    listSort: false,
    show: true,
    editType: options.editTypeOptions['TEXT'].value,
    orderNo: 1
  },
  '主键ID(Integer)': {
    jfieldName: 'id',
    fieldName: 'id',
    fieldDesc: '主键',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: '',
    fieldExample: '1',
    fieldComment: '主键ID',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: true,
    columnWidth: 100,
    listSort: false,
    show: true,
    editType: options.editTypeOptions['TEXT'].value,
    orderNo: 1
  },
  '创建时间': {
    jfieldName: 'createdTime',
    fieldName: 'created_time',
    fieldDesc: '创建时间',
    jfieldType: 'Date',
    fieldType: 'datetime',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'createdTime',
    fieldExample: '2017-12-07 00:00:00',
    fieldComment: '创建时间【yyyy-MM-dd HH:mm:ss】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: true,
    columnWidth: 200,
    listSort: true,
    show: false,
    editType: options.editTypeOptions['DATETIME'].value,
    orderNo: 100
  },
  '创建人': {
    jfieldName: 'createdBy',
    fieldName: 'created_by',
    fieldDesc: '创建人',
    jfieldType: 'String',
    fieldType: 'varchar',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'createdBy',
    fieldExample: 'admin',
    fieldComment: '创建人【最大长度20】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: false,
    columnWidth: 0,
    listSort: false,
    show: false,
    editType: options.editTypeOptions['TEXT'].value,
    orderNo: 101
  },
  '修改时间': {
    jfieldName: 'operatedTime',
    fieldName: 'operated_time',
    fieldDesc: '修改时间',
    jfieldType: 'Date',
    fieldType: 'datetime',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'operatedTime',
    fieldExample: '2017-12-07 00:00:00',
    fieldComment: '修改时间【yyyy-MM-dd HH:mm:ss】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: true,
    columnWidth: 200,
    listSort: true,
    show: false,
    editType: options.editTypeOptions['DATETIME'].value,
    orderNo: 110
  },
  '修改人': {
    jfieldName: 'operatedBy',
    fieldName: 'operated_by',
    fieldDesc: '修改人',
    jfieldType: 'String',
    fieldType: 'varchar',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'operatedBy',
    fieldExample: 'admin',
    fieldComment: '修改人【最大长度20】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: false,
    columnWidth: 0,
    listSort: false,
    show: false,
    editType: options.editTypeOptions['TEXT'].value,
    orderNo: 111
  },
  '乐观锁版本号': {
    jfieldName: 'version',
    fieldName: 'version',
    fieldDesc: '乐观锁版本号',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'version',
    fieldExample: '1',
    fieldComment: '乐观锁版本号【整型】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: false,
    columnWidth: 0,
    listSort: false,
    show: false,
    editType: options.editTypeOptions['NUMBER'].value,
    orderNo: 120
  },
  '逻辑删除标识': {
    jfieldName: 'deleted',
    fieldName: 'deleted',
    fieldDesc: '逻辑删除标识',
    jfieldType: 'Boolean',
    fieldType: 'tinyint',
    fieldLength: 1,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: 'deleted',
    fieldExample: 'false',
    fieldComment: '逻辑删除标识【0-未删除，1-已删除】',
    dicType: '',
    query: false,
    queryType: null,
    insert: false,
    update: false,
    list: false,
    columnWidth: 0,
    listSort: false,
    show: false,
    editType: options.editTypeOptions['RADIO'].value,
    orderNo: 130
  },
  '排序号': {
    jfieldName: 'orderNo',
    fieldName: 'order_no',
    fieldDesc: '排序号',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: false,
    autoIncrement: false,
    defaultValue: '',
    notNull: true,
    foreignKey: false,
    specialField: '',
    fieldExample: '1',
    fieldComment: '排序号【整型】',
    dicType: '',
    query: false,
    queryType: null,
    insert: true,
    update: true,
    list: true,
    columnWidth: 100,
    listSort: true,
    show: true,
    editType: options.editTypeOptions['NUMBER'].value,
    orderNo: 90
  }
}

export const findSystemTemplate = function (key) {
  const t1 = flexibleTemplate[key]
  if (t1) {
    return t1
  } else {
    return fixedTemplate[key]
  }
}
