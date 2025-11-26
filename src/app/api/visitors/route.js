import { 
  createVisitor, 
  getAllVisitors 
} from '../../../lib/visitorOperations';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { page, limit, sortBy, sortOrder } = req.query;
        const result = await getAllVisitors({
          page: parseInt(page) || 1,
          limit: parseInt(limit) || 10,
          sortBy,
          sortOrder
        });

        if (result.success) {
          res.status(200).json(result);
        } else {
          res.status(400).json(result);
        }
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const result = await createVisitor(req.body);
        
        if (result.success) {
          res.status(201).json(result);
        } else {
          res.status(400).json(result);
        }
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}