import { Send } from "lucide-react"

const SimpleButton = () => {
    return (
        <>
          <button
                  type="submit"
                  className="flex items-center justify-center bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </button>
        </>
    )
}

export default SimpleButton