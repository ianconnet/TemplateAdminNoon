const CustomModal = ({ isOpen, children }) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className="py-10 fixed inset-0 overflow-y-auto z-50 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg max-h-screen overflow-y-scroll py-3">
                {children}
            </div>
        </div>
    );
}

export default CustomModal