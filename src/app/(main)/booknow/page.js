'use client';
import { useState, useEffect } from 'react';

export default function VisitorManagement() {
  // State management
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    numberOfVisitors: 1,
    from: '',
    to: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });

  // Fetch visitors
  const fetchVisitors = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/visitors?page=${page}&limit=${pagination.limit}`);
      const result = await response.json();
      
      if (result.success) {
        setVisitors(result.data);
        setPagination(result.pagination);
      } else {
        alert('Error fetching visitors: ' + result.error);
      }
    } catch (error) {
      alert('Error fetching visitors: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Search visitors
  const searchVisitors = async (query) => {
    if (!query.trim()) {
      fetchVisitors();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/visitors/search?query=${encodeURIComponent(query)}`);
      const result = await response.json();
      
      if (result.success) {
        setVisitors(result.data);
        setPagination(result.pagination);
      } else {
        alert('Error searching visitors: ' + result.error);
      }
    } catch (error) {
      alert('Error searching visitors: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create or update visitor
  const saveVisitor = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingId ? `/api/visitors/${editingId}` : '/api/visitors';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Reset form and refresh data
        setFormData({
          name: '',
          phone: '',
          email: '',
          numberOfVisitors: 1,
          from: '',
          to: ''
        });
        setEditingId(null);
        fetchVisitors();
        alert(editingId ? 'Visitor updated successfully!' : 'Visitor created successfully!');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      alert('Error saving visitor: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete visitor
  const deleteVisitor = async (id) => {
    if (!confirm('Are you sure you want to delete this visitor?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/visitors/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        fetchVisitors();
        alert('Visitor deleted successfully!');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      alert('Error deleting visitor: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Edit visitor
  const editVisitor = (visitor) => {
    setFormData({
      name: visitor.name,
      phone: visitor.phone,
      email: visitor.email,
      numberOfVisitors: visitor.numberOfVisitors,
      from: visitor.from,
      to: visitor.to
    });
    setEditingId(visitor._id);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfVisitors' ? parseInt(value) || 1 : value
    }));
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query.length > 2 || query.length === 0) {
      searchVisitors(query);
    }
  };

  // Load visitors on component mount
  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Visitor Management System</h1>
          <p className="text-gray-600">Manage visitor registrations and tracking</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {editingId ? 'Edit Visitor' : 'Add New Visitor'}
              </h2>
              
              <form onSubmit={saveVisitor} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Visitors *
                  </label>
                  <input
                    type="number"
                    name="numberOfVisitors"
                    value={formData.numberOfVisitors}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    From *
                  </label>
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Where are they coming from?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To *
                  </label>
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Where are they going?"
                  />
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                  >
                    {loading ? 'Saving...' : editingId ? 'Update Visitor' : 'Add Visitor'}
                  </button>
                  
                  {editingId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          numberOfVisitors: 1,
                          from: '',
                          to: ''
                        });
                      }}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {/* Search and Controls */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex-1 max-w-md">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearch}
                      placeholder="Search visitors by name, email, phone, location..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => fetchVisitors()}
                    disabled={loading}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-200"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              {/* Visitors List */}
              <div className="overflow-hidden">
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                ) : visitors.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No visitors found</p>
                    <p className="text-gray-400 mt-2">Add your first visitor using the form</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Visitor
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Details
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {visitors.map((visitor) => (
                          <tr key={visitor._id} className="hover:bg-gray-50 transition duration-150">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {visitor.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {visitor.numberOfVisitors} visitor(s)
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{visitor.phone}</div>
                              <div className="text-sm text-gray-500">{visitor.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <div className="font-medium">From:</div>
                                {visitor.from}
                              </div>
                              <div className="text-sm text-gray-500">
                                <div className="font-medium">To:</div>
                                {visitor.to}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                visitor.status === 'approved' 
                                  ? 'bg-green-100 text-green-800'
                                  : visitor.status === 'rejected'
                                  ? 'bg-red-100 text-red-800'
                                  : visitor.status === 'completed'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {visitor.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => editVisitor(visitor)}
                                  className="text-blue-600 hover:text-blue-900 transition duration-150"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteVisitor(visitor._id)}
                                  className="text-red-600 hover:text-red-900 transition duration-150"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pagination */}
                {pagination.pages > 1 && (
                  <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-700">
                        Showing page {pagination.page} of {pagination.pages}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => fetchVisitors(pagination.page - 1)}
                          disabled={pagination.page === 1}
                          className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => fetchVisitors(pagination.page + 1)}
                          disabled={pagination.page === pagination.pages}
                          className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}