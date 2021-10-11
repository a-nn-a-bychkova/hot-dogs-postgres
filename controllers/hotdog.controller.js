const db = require("../db");
class HotdogController {
  async createHotdog(req, res) {
    const { name, img, price, description } = req.body;
    const newHotdog = await db.query(
      `INSERT INTO hotdog (name, img, price, description) values ($1, $2, $3, $4) RETURNING *`,
      [name, img, price, description]
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
    const { id, img, name, price, description } = req.body;
    const hotdog = await db.query(
      `UPDATE hotdog set name = $1, img = $2, price= $3, description = $4 where id = $5 RETURNING *`,
      [name, img, price, description, id]
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
