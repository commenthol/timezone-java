import java.util.TimeZone;

public class PrintTimezones {
  public static void main(String[] args) {
    String[] ids = TimeZone.getAvailableIDs();
    for (String id : ids) {
      System.out.println(id);
    }
  }
}
