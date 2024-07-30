const Session = require('../models/sessionmodel');

const createSession = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming req.user is set after token verification
    const ipAddress = req.ip;
    const session = new Session({ userId, ipAddress });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSessions = async (req, res) => {
  try {
    const { userId } = req.user; // Assuming req.user is set after token verification
    const sessions = await Session.find({ userId });
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const endSession = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findByIdAndUpdate(id, { logoutTime: new Date() }, { new: true });
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSession,
  getSessions,
  endSession,
};
