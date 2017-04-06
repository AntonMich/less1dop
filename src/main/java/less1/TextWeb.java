package less1;


import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TextWeb extends HttpServlet {
	
	
/**
	 * 
	 */
	private static final long serialVersionUID = 4279440170282672746L;


@Override
	public void init() throws ServletException {
		// TODO Auto-generated method stub
	
		System.out.println("init");
	}


	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher view=req.getRequestDispatcher("textarea.jsp");
	    view.forward(req,resp); 
	}
	
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");        
        String text=request.getParameter("input");
        boolean check=Boolean.parseBoolean(request.getParameter("check"));
        System.out.println(request.getParameter("check"));

		response.getWriter().write(reverseString(text, check));
	}
	private String reverseString(String string, boolean check){
		String result="";
		if (check){
			String[] parts=string.split(" ");
			for (String str:parts){
				String reverse=new StringBuffer(str).reverse().toString();
				result=result+reverse+" ";
			}
		}else{
			result=new StringBuffer(string).reverse().toString();
		}
		return result.trim();
		
	}

}
