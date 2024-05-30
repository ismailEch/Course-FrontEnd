import React from 'react';

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete this category?</p>
                <div className="flex justify-end mt-6">
                    <button 
                        className="mr-4 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button 
                        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
