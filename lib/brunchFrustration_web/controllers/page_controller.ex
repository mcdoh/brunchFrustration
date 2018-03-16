defmodule BrunchFrustrationWeb.PageController do
  use BrunchFrustrationWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
