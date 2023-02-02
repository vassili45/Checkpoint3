const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set Nom = ?, Url = ?, Screenshot = ?, Description = ? WHERE id = ?`,
      [
        project.Nom,
        project.Url,
        project.Screenshot,
        project.Description,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
