Feature: Demo of cucumber

    This is an demo about how to use cucumber
    # Scenario: Demo of cucumber
    #     Given Open the main browser
    #     When Typing name Jorge
    #     When Typing email jorge@example.com
    #     And Typing address address_uno
    #     Then Click the button

    Scenario Outline: Demo of cucumber multiple
        Given Open the main browser
        When Typing name <username>
        And Typing email <email>
        And Typing address <addr1>
        And Typing address 2 <addr2>
        Then Click the button

        Examples:
            | username | email              | addr1    | addr2    |
            | Juan     | juan@example.com   | address1 | address2 |
            | Carlos   | carlos@example.com | address1 | address2 |
            | Jorge    | jorge@example.com  | address1 | address2 |
            | Vivian   | vivian@example.com | address1 | address2 |
            | Maria    | maria@example.com  | address1 | address2 |
            | Pedro    | pedro@example.com  | address1 | address2 |