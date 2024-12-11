import { Component, ErrorInfo, ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    // Updates state to indicate that an error has been caught
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught in error boundary:", error, errorInfo)
  }

  render() {
    // fallback UI when an error is caught , this is should on dev mod only
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>
    }

    // render children if no error has occurred
    return this.props.children
  }
}

export default ErrorBoundary
