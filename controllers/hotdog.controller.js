const db = require("../db");
class HotdogController {
  async createHotdog(req, res) {
    const { name, price, description } = req.body;
    const newHotdog = await db.query(
      `INSERT INTO hotdog (name, price, description) values ($1, $2, $3) RETURNING *`,
      [name, price, description]
    );
    res.json(newHotdog.rows[0]);
  }
  async getHotdogs(req, res) {
    const hotdogs = await db.query("SELECT * FROM hotdog");
    res.json(hotdogs.rows);
  }
  async getOneHotdog(req, res) {
    const id = req.params.id;
    const hotdog = await db.query(`SELECT * FROM hotdog where id = $1`, [id]);
    res.json(hotdog.rows[0]);
  }

  async updateHotdog(req, res) {
    const { id, name, price, description } = req.body;
    const hotdog = await db.query(
      `UPDATE hotdog set name = $1, price = $2, description = $3 where id = $4 RETURNING *`,
      [name, price, description, id]
    );
    res.json(hotdog.rows[0]);
  }

  async deleteHotdog(req, res) {
    const id = req.params.id;
    const hotdog = await db.query(`DELETE FROM hotdog where id = $1`, [id]);
    res.json(hotdog.rows[0]);
  }
}

module.exports = new HotdogController();