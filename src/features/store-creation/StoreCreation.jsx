import useStoreForm from '../../hooks/useStoreForm'

const StoreCreation = () => {
  const {
    formData,
    isChecking,
    isAvailable,
    error,
    handleChange,
    checkDomain,
    handleSubmit,
  } = useStoreForm()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-2x rounded-xl p-8 max-w-2xl w-full lg:w-3/5">
        <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-800">
          Create a Store
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Add your store details and get started
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold text-gray-700">
              Store Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your store name"
              className={`w-full px-4 py-2 rounded-md border ${
                error.name ? 'border-red-500' : 'border-gray-300'
              }`}
              onChange={handleChange}
              required
            />
            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Subdomain
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="domain"
                placeholder="Enter domain"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                onChange={handleChange}
                required
              />
              <span className="text-gray-600">.expressitbd.com</span>
              <button
                type="button"
                onClick={checkDomain}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {isChecking ? 'Checking...' : 'Check'}
              </button>
            </div>
            {error.domain && (
              <p className="text-red-500 text-sm mt-1">{error.domain}</p>
            )}
            {isAvailable && (
              <>
                {isAvailable.data.taken === true ? (
                  <p className="text-red-500 text-sm mt-1">
                    {isAvailable.data.message}
                  </p>
                ) : (
                  <p className="text-green-500 text-sm mt-1">
                    {isAvailable.data.message}
                  </p>
                )}
              </>
            )}
          </div>
          <div>
            <label className="block font-semibold text-gray-700">Country</label>
            <select
              name="country"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              onChange={handleChange}
            >
              <option value="Bangladesh">Bangladesh</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              onChange={handleChange}
            >
              <option value="Fashion">Fashion</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Currency
            </label>
            <select
              name="currency"
              className="w-full px-4 py-2 rounded-md border border-gray-300"
              onChange={handleChange}
            >
              <option value="BDT">BDT (Taka)</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 rounded-md border ${
                error.email ? 'border-red-500' : 'border-gray-300'
              }`}
              onChange={handleChange}
              required
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          {error.submit && (
            <p className="text-red-500 text-sm mt-2">{error.submit}</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            disabled={isChecking}
          >
            Create Store
          </button>
        </form>
      </div>
    </div>
  )
}

export default StoreCreation
