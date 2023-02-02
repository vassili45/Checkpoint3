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

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (Nom, Url, Screenshot, Description) values (?, ?, ?, ?)`,
      [project.Nom, project.Url, project.Screenshot, project.Description]
    );
  }
}

module.exports = ProjectManager;
