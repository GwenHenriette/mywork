// const pool = require('../config/database');

// const getAntidepressantGuideData = async () => {
//   const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIDEPRESSANTS GUIDE`');
//   return rows;
// };

// const antidepressantGuideController = {
//    getData: async (req,res, next) => {
//     const antidepressantGuideData = await getAntidepressantGuideData ();
//     res.send(antidepressantGuideData);
//    }

// };

// module.exports = antidepressantGuideController;

const pool = require('../config/database');


const getAPData = async () => {
  const [rows, fields] = await pool.query('SELECT * FROM `green_card`.`ANTIDEPRESSANTS GUIDE`');
  return rows;
};

const getData = async (req, res, next) => {
  const apData = await getAPData();
  res.send(apData);
}


const updateData = async (req, res, next) => {
  try {
    const { name, column, value } = req.body;
    await pool.query('UPDATE `green_card`.`ANTIDEPRESSANTS GUIDE` SET ' + column + ' = ' + '"' + value + '"' + ' WHERE name = ' + '"' + name + '"');
    res.send("Updated Successfully!");
  } catch (error) {
    console.log(error);
    next(error);
    throw error;
  }
}

module.exports = {
  getData,
  updateData
};
