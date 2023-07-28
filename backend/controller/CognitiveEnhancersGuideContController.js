const pool = require("../config/database");

const getAPData = async () => {
  const [rows, fields] = await pool.query("SELECT * FROM `green_card`.`COGNITIVE ENHANCERS GUIDE`");
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
};

const updateData = async (req, res, next) => {
  try {
    const { name, column, value, id } = req.body; // Extract id from the request body

    // Update your SQL query to include the id for more specific updating
    const query = `UPDATE \`green_card\`.\`COGNITIVE ENHANCERS GUIDE\` SET ?? = ? WHERE name = ? AND id = ?`;
    const [results] = await pool.query(query, [column, value, name, id]); // Add id to the parameters
    console.log(results);

    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//this page doesn't need add drug feature as it is a continuation of the cognitive enhancers guide page, drug added there automatically gets added here.
//this page doesn't have any new drugs but just shows the remaining properties of the drugs in the cognitive enhancers guide page

module.exports = {
  getData,
  updateData,
};
