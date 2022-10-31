from easynmt import EasyNMT


class Translator:
    def __init__(self):

        self.model = EasyNMT("opus-mt", max_loaded_models=5)
        self.source_lang = "en"
        self.beam_size = 5
        self.batch_size = 1  # need to change for faster inference

        self.lang = "None"
        self.sent = "None"

    def identification(self, sentence):
        self.lang = self.model.language_detection(sentence)

    def translation(self, target_lang, sentence):
        self.sent = self.model.translate(
            sentence,
            source_lang=self.source_lang,
            target_lang=target_lang,
            batch_size=self.batch_size,
            beam_size=self.beam_size,
        )
