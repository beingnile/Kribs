const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ msg: 'Property not found' });
    res.json(property);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId')
      return res.status(404).json({ msg: 'Property not found' });
    res.status(500).send('Server error');
  }
};

exports.createProperty = async (req, res) => {
  const { title, description, price, location, image } = req.body;

  try {
    const newProperty = new Property({
      title,
      descriptioon,
      price,
      location,
      image
    });

    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updatePrperty = async (req, res) => {
  const { title, description, price, location, image } = req.body;

  try {
    let property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ msg: 'Property not found' });

    property.title = title || property.title;
    property.description = description || property.description;
    property.price = price || property.price;
    property.location = location || property.location;
    property.image = image || property.image;

    property = await Property.findByIdAndUpdate(req.params.id, { $set: property });
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    let property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ msg: 'Property not found' });

    await Property.findByIdAndRemove(req.params.id, { $set: property });
    res.json({ msg: 'Property removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
