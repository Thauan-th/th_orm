class MysqlCore {
  constructor(initialConfigs) {
    this.initial = initialConfigs
  }

  init() {
    console.log(this.initial)
  }
}
module.exports = MysqlCore 